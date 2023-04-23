'use client';
import { Button, Highlight } from 'components/Button';
import { KeyboardIllustration } from 'components/illustrations/keyboard';
import React, { useEffect, useRef } from 'react';

const shortcuts = [
  { text: 'Opens command line', keys: '⌘k' },
  { text: 'Assign issue to me', keys: 'i' },
  { text: 'Assign issue to', keys: 'a' },
  { text: 'Change issue status', keys: 's' },
  { text: 'Set issue priority', keys: 'p' },
  { text: 'Add issue labels', keys: 'l' },
  { text: 'Set due date', keys: '⇧d' },
  { text: 'Set parent issue', keys: '⇧⌘p' },
  { text: 'Add sub-issue', keys: '⇧⌘o' },
  { text: 'Create new issue', keys: 'c' },
  { text: 'Create new issue from template', keys: '⌥c' },
  { text: 'Move to project', keys: '⇧p' },
];

export const KeyboardShortcuts = () => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const illustrationWrapperRef = useRef<HTMLDivElement>(null);
  const activeShortcutIndex = useRef(0);
  const timeoutRef = useRef<NodeJS.Timeout>();

  const scheduleTimeout = () => {
    timeoutRef.current = setTimeout(goToNextShortcut, 2500);
  };

  useEffect(() => {
    scheduleTimeout();
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  });

  const goToShortcut = (index: number) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    if (!wrapperRef.current) return;

    const shortcut = wrapperRef.current.querySelector<HTMLButtonElement>(
      `button:nth-child(${index + 1})`
    );
    if (!shortcut) return;
    wrapperRef.current.scrollTo({
      left: shortcut.offsetLeft - wrapperRef.current.clientWidth / 2,
    });

    if (!illustrationWrapperRef) return;

    illustrationWrapperRef.current
      ?.querySelectorAll('.active')
      .forEach((element) => element.classList.remove('active'));

    const keys = shortcut.dataset.keys || '';
    const keyArray = keys.split('');
    const keyElements = keyArray.map((key) =>
      illustrationWrapperRef.current?.querySelector(`[data-key="${key}"]`)
    );

    keyElements.forEach((element) => element?.classList.add('active'));
    activeShortcutIndex.current = index;
    scheduleTimeout();
  };

  const goToNextShortcut = () => {
    goToShortcut((activeShortcutIndex.current + 1) % shortcuts.length);
  };

  const onShortcutButtonClick = (ev: React.MouseEvent<HTMLButtonElement>) => {
    ev.preventDefault();
    goToShortcut(Number(ev.currentTarget.dataset.index));
  };

  return (
    <>
      <div
        ref={illustrationWrapperRef}
        className='mask-keyboard absolute left-12 top-0 h-full max-h-[30rem] w-[200%] md:relative md:left-auto md:w-full'
      >
        <KeyboardIllustration />
      </div>
      <div className='my-7  hidden min-h-[4rem] w-full snap-center overflow-hidden md:block '>
        <div
          ref={wrapperRef}
          className='mask-shortcut-keys  flex min-h-[4rem] max-w-full snap-x snap-mandatory gap-2 overflow-auto scroll-smooth whitespace-nowrap pb-8'
        >
          {shortcuts.map((shortcut, index) => (
            <Button
              variant='secondary'
              onClick={onShortcutButtonClick}
              key={shortcut.text}
              className='shrink-0 first:ml-[50vw] last:mr-[50vw]'
              data-keys={shortcut.keys}
              data-index={index}
            >
              <Highlight className='uppercase'>{shortcut.keys}</Highlight>
              <span>{shortcut.text}</span>
            </Button>
          ))}
        </div>
      </div>
    </>
  );
};
