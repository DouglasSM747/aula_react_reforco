import { ReactNode } from "react";
import { CloseButton, ModalContent, ModalWrapper } from "./Modal.style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWindowClose } from "@fortawesome/free-solid-svg-icons";

export interface ModalProps {
  isOpen?: boolean;
  close?: () => void;
  title?: string;
  children: ReactNode;
}

export function Modal({ isOpen, close, title, children }: ModalProps) {
  if (!isOpen) return null;

  return (
    <ModalWrapper>
      <ModalContent>
        <CloseButton onClick={close}>
          <FontAwesomeIcon icon={faWindowClose} />
        </CloseButton>
        <h2>{title}</h2>
        {children}
      </ModalContent>
    </ModalWrapper>
  );
}
