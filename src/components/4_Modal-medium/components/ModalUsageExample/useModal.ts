'use client';

import { useState, useCallback } from 'react';

import { useMemoProps, useMemoReturn } from './types';

export const useModal = (visibility: useMemoProps): useMemoReturn => {
  const [isOpen, setIsOpen] = useState(visibility.opened);

  const openModal = useCallback(() => {
    setIsOpen(true);

    const isDocumentDefined = typeof document !== 'undefined';
    if (!isDocumentDefined) return;

    const documentBody = document.querySelector('body');
    const isDocumentBodyDefined = documentBody !== null;

    if (!isDocumentBodyDefined) return;

    documentBody.style.overflowY = 'hidden';
  }, [isOpen]);

  const closeModal = useCallback(() => {
    setIsOpen(false);

    const isDocumentDefined = typeof document !== 'undefined';
    if (!isDocumentDefined) return;

    const documentBody = document.querySelector('body');
    const isDocumentBodyDefined = documentBody !== null;

    if (!isDocumentBodyDefined) return;

    documentBody.style.overflowY = 'auto';
  }, [isOpen]);

  return {
    isOpen,
    openModal,
    closeModal,
  };
};
