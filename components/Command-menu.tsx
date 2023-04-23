'use client';
import classNames from 'classnames';
import { useEffect, useMemo, useRef, useState } from 'react';

import {
  AddLabels,
  AssignToIcon,
  BacklogIcon,
  ChangePriorityIcon,
  ChangeStatusIcon,
  DoneIcon,
  HighIcon,
  InProgressIcon,
  LabelIcon,
  LowIcon,
  MediumIcon,
  NoPriorityIcon,
  PersonIcon,
  TodoIcon,
  UrgentIcon,
} from './icons/command-bar';

const commandOptions = [
  {
    label: 'Assign to..',
    icon: AssignToIcon,
    subOptions: [
      { label: 'Jori', icon: PersonIcon },
      { label: 'Karri', icon: PersonIcon },
      { label: 'Tuomas', icon: PersonIcon },
    ],
  },
  {
    label: 'Change status...',
    icon: ChangeStatusIcon,
    subOptions: [
      { label: 'Backlog', icon: BacklogIcon },
      { label: 'Todo', icon: TodoIcon },
      { label: 'In Progress', icon: InProgressIcon },
      { label: 'Done', icon: DoneIcon },
    ],
  },
  {
    label: 'Change priority...',
    icon: ChangePriorityIcon,
    subOptions: [
      { label: 'No priority', icon: NoPriorityIcon },
      { label: 'Urgent', icon: UrgentIcon },
      { label: 'High', icon: HighIcon },
      { label: 'Medium', icon: MediumIcon },
      { label: 'Low', icon: LowIcon },
    ],
  },
  {
    label: 'Add labels...',
    icon: AddLabels,
    subOptions: [
      { label: 'Bug', icon: () => <LabelIcon type='bug' /> },
      { label: 'Feature', icon: () => <LabelIcon type='feature' /> },
      { label: 'Improvement', icon: () => <LabelIcon type='improvement' /> },
    ],
  },
] as const;

export const CommandMenu = () => {
  const [opened, setOpened] = useState(false);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [searchValue, setSearchValue] = useState('');
  const commandMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const toggleCommandMenu = (e: MouseEvent) => {
      if (!commandMenuRef.current) return;
      const isMenuButton =
        e.target instanceof Element &&
        e.target.classList.contains('command-menu-button');
      const clickedOutside =
        !isMenuButton && !commandMenuRef.current?.contains(e.target as Node);
      setOpened(clickedOutside ? false : true);
    };

    window.addEventListener('click', toggleCommandMenu);

    return () => {
      window.removeEventListener('click', toggleCommandMenu);
    };
  }, []);

  const currentOptions = useMemo(() => {
    const options =
      selectedOption === null
        ? commandOptions
        : commandOptions[selectedOption].subOptions;

    if (searchValue === '') return options;

    return [...options].filter((option) =>
      option.label.toLowerCase().includes(searchValue.toLowerCase())
    );
  }, [selectedOption, searchValue]);

  useEffect(() => {
    if (!commandMenuRef.current) return;
    commandMenuRef.current.classList.remove('animate-bounce');
    commandMenuRef.current.clientWidth;
    commandMenuRef.current.classList.add('animate-bounce');
  }, [selectedOption]);
  return (
    <div ref={commandMenuRef} className={classNames(opened && 'opened')}>
      <div
        className={classNames(
          'bg-transparent-white border-transparent-white absolute left-[calc(50%+5.5rem)] flex w-[90vw] max-w-[64rem] -translate-x-1/2 flex-col items-start rounded-lg border shadow-[rgba(0_0_0_/_35%)_0px_7px_32px] transition-[transform,opacity] md:left-1/2',
          opened && 'translate-y-[12.8rem] opacity-100 md:translate-y-[2.4rem]',
          !opened && 'translate-y-[12.8rem] opacity-60'
        )}
      >
        <span className='ml-4  mt-2 bg-white/5 px-2 text-xs leading-10 text-white/50'>
          LIN-111 Walkway lighting
        </span>
        <input
          className='w-full bg-transparent p-5 text-lg outline-none'
          placeholder='Type a command or search...'
          value={searchValue}
          onChange={(ev) => setSearchValue(ev.target.value)}
        />
        <div className='text-off-white flex w-full flex-col text-sm'>
          {currentOptions.map(({ label, icon: Icon, ...menuItem }, index) => (
            <button
              className='command-menu-button flex h-[4.6rem] w-full items-center gap-3 px-5 first:bg-white/[0.15] hover:bg-white/5'
              key={label}
              onClick={(ev) => {
                const clickedRootItem = 'subOptions' in menuItem;
                setSelectedOption(clickedRootItem ? index : null);
                if (!clickedRootItem) {
                  setOpened(false);
                  ev.stopPropagation();
                }
              }}
            >
              <Icon />
              {label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
