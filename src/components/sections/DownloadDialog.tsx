"use client";

import * as ToastPrimitive from "@radix-ui/react-toast";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { Button, type ButtonProps } from "@/components/ui/Button";
import {
  Dialog,
  DialogClose,
  DialogCloseIcon,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

type DownloadDialogProps = Omit<ButtonProps, "children"> & {
  children?: ButtonProps["children"];
};

export function DownloadDialog({ children = "Download App", className, ...props }: DownloadDialogProps) {
  const [open, setOpen] = useState(false);
  const [toastOpen, setToastOpen] = useState(false);

  function handleNotify() {
    setOpen(false);
    setToastOpen(true);
  }

  return (
    <ToastPrimitive.Provider swipeDirection="right">
      <Dialog onOpenChange={setOpen} open={open}>
        <DialogTrigger asChild>
          <Button className={className} {...props}>
            {children}
          </Button>
        </DialogTrigger>
        <DialogContent className="overflow-hidden rounded-[2rem] border-0 bg-gradient-to-r from-[#3B2EFF] via-[#FF2E92] to-[#FF8A3D] p-px shadow-[0_30px_100px_rgba(16,17,20,0.25)]">
          <div className="overflow-hidden rounded-[calc(2rem-1px)] bg-white">
            <div className="h-1.5 bg-gradient-to-r from-[#3B2EFF] via-[#FF2E92] to-[#FF8A3D]" />
            <div className="relative px-6 pb-7 pt-8 sm:px-10 sm:pb-10 sm:pt-10">
              <DialogCloseIcon />
              <div className="pr-10">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#7D3CFF]">Amistaa mobile</p>
                <DialogTitle className="mt-4 text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl">
                  Coming Soon
                </DialogTitle>
                <DialogDescription className="mt-4 text-base font-medium leading-7 text-zinc-700">
                  The Amistaa mobile app is currently under development.
                </DialogDescription>
                <p className="mt-3 text-sm leading-7 text-zinc-500">
                  We&apos;re working hard to deliver a premium creator communication experience.
                </p>
                <p className="mt-3 text-sm font-medium leading-7 text-zinc-700">Be the first to know when we launch.</p>
              </div>
              <div className="mt-8 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
                <DialogClose asChild>
                  <Button className="w-full sm:w-auto" variant="secondary">
                    Close
                  </Button>
                </DialogClose>
                <Button className="w-full sm:w-auto" onClick={handleNotify}>
                  Notify Me
                  <ArrowRight aria-hidden="true" className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
      <AnimatePresence>
        {toastOpen ? (
          <ToastPrimitive.Root
            asChild
            duration={4500}
            onOpenChange={setToastOpen}
            open={toastOpen}
          >
            <motion.div
              animate={{ opacity: 1, y: 0 }}
              className="fixed bottom-5 right-5 z-[60] w-[calc(100%-2.5rem)] max-w-sm rounded-2xl border border-zinc-200 bg-white p-4 shadow-[0_18px_55px_rgba(16,17,20,0.16)]"
              exit={{ opacity: 0, y: 12 }}
              initial={{ opacity: 0, y: 12 }}
              transition={{ duration: 0.2 }}
            >
              <ToastPrimitive.Title className="text-sm font-semibold leading-6 text-zinc-950">
                Thanks! We&apos;ll notify you when Amistaa launches.
              </ToastPrimitive.Title>
            </motion.div>
          </ToastPrimitive.Root>
        ) : null}
      </AnimatePresence>
      <ToastPrimitive.Viewport className="fixed bottom-0 right-0 z-[60] flex max-w-full flex-col p-5 outline-none" />
    </ToastPrimitive.Provider>
  );
}
