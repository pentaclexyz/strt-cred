import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { Fragment } from "react";

export default function SkillSelect({
  selectedCategories,
  setSelectedCategories,
  categories,
}) {
  return (
    <Listbox
      value={selectedCategories}
      onChange={setSelectedCategories}
      multiple
    >
      <div className="relative mt-1">
        <Listbox.Label className={'px-3'}>My Categories:</Listbox.Label>
        <Listbox.Button className="relative py-2 pl-3 w-full text-left bg-white cursor-default focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
          <span className="block truncate">
            {selectedCategories.length ? (
              selectedCategories.map((person) => person.name).join(", ")
            ) : (
              <span className="text-gray-400">Select your categories</span>
            )}
          </span>
          <span className="flex absolute inset-y-0 right-0 items-center pr-2 pointer-events-none">
            <ChevronUpDownIcon
              className="w-5 h-5 text-gray-400"
              aria-hidden="true"
            />
          </span>
        </Listbox.Button>
        <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Listbox.Options className="overflow-auto absolute z-20 py-1 mt-1 w-full max-h-60 text-base bg-white rounded-md border ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm border-primary">
            {categories.map((category) => (
              <Listbox.Option
                key={category.name}
                value={category}
                className={`relative py-2 pr-4 pl-10 text-gray-900 cursor-pointer select-none`}
              >
                {({ selected }) => (
                  <>
                    <span className={`block truncate`}>{category.name}</span>
                    {selected ? (
                      <span className="flex absolute inset-y-0 left-0 items-center pl-3 text-gray-900">
                        <CheckIcon className="w-5 h-5" aria-hidden="true" />
                      </span>
                    ) : null}
                  </>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>
      </div>
    </Listbox>
  );
}
