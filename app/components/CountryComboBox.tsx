'use client';

import * as React from 'react';

import { useMediaQuery } from 'usehooks-ts';

import { Button } from '@/components/ui/button';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command';
import { Drawer, DrawerContent, DrawerTrigger } from '@/components/ui/drawer';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Country } from '@/lib/types';
import { fetchCountries } from '@/lib/api';

export default function CountryComboBox() {
  const [open, setOpen] = React.useState(false);
  const isDesktop = useMediaQuery('(min-width: 768px)');
  const [selectedCountry, setSelectedCountry] = React.useState<Country | null>(null);
  const [countries, setCountries] = React.useState<Country[]>([]);

  React.useEffect(() => {
    fetchCountries().then((data) => {
      const countries = data.map((country) => ({
        label: country.value + ': ' + country.label,
        value: country.value.toLowerCase(),
      }));
      setCountries(countries);
    });
  }, []);

  if (isDesktop) {
    return (
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button variant="outline" className="w-[150px] justify-start">
            {selectedCountry ? <>{selectedCountry.label}</> : <>Select a country...</>}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[200px] p-0" align="start">
          <CountryList
            setOpen={setOpen}
            setSelectedCountry={setSelectedCountry}
            countries={countries}
          />
        </PopoverContent>
      </Popover>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button variant="outline" className="w-full justify-start">
          {selectedCountry ? <>{selectedCountry.label}</> : <>Select a country...</>}
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mt-4 border-t">
          <CountryList
            setOpen={setOpen}
            setSelectedCountry={setSelectedCountry}
            countries={countries}
          />
        </div>
      </DrawerContent>
    </Drawer>
  );
}

function CountryList({
  setOpen,
  setSelectedCountry,
  countries,
}: {
  setOpen: (open: boolean) => void;
  setSelectedCountry: (country: Country | null) => void;
  countries: Country[];
}) {
  return (
    <Command>
      <CommandInput placeholder="Filter status..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup>
          {countries.map((country) => (
            <CommandItem
              key={country.value}
              value={country.value}
              onSelect={(value) => {
                setSelectedCountry(countries.find((priority) => priority.value === value) || null);
                setOpen(false);
              }}>
              {country.label}
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
    </Command>
  );
}
