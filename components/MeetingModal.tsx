import React, { ReactNode } from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"  // Importing dialog components from a shadcn UI library
import Image from 'next/image'; // Importing Image component from Next.js for optimized image handling
import { cn } from '@/lib/utils'; // Importing utility function for combining class names
import { Button } from './ui/button'; // Importing Button component

// Defining the props interface for the MeetingModal component
interface MeetingModalProps {
    isOpen: boolean; // Controls whether the modal is open or closed
    onClose: () => void; // Function to handle closing the modal
    title: string; // Title of the modal
    className?: string; // Optional additional class names for styling
    children?: ReactNode; // Optional children elements to be rendered inside the modal
    handleClick?: () => void; // Optional function to handle button click
    buttonText?: string; // Optional text for the button
    image?: string; // Optional URL for an image to be displayed
    buttonIcon?: string // Optional URL for an icon to be displayed on the button
}

// MeetingModal functional component
const MeetingModal = ({
    isOpen,
    onClose,
    title,
    className,
    children,
    handleClick,
    buttonText,
    image,
    buttonIcon
}: MeetingModalProps) => {
    return (
        // Dialog component controls the modal's visibility
        <Dialog open={isOpen} onOpenChange={onClose}>
            {/* Trigger to open the dialog */}
            <DialogTrigger>Open</DialogTrigger>
            {/* Content of the dialog */}
            <DialogContent className='flex w-full max-w-[520px] flex-col gap-6 border-none bg-dark-1 px-6 py-9 text-white'>
                <div className="flex flex-col gap-6">
                    {/* Conditionally render the image if provided */}
                    {image && (
                        <div className="flex justify-center">
                            <Image src={image} alt="image" width={72} height={72} />
                        </div>
                    )}
                    {/* Modal title with conditional class names */}
                    <h1 className={cn('text-3xl font-bold leading-[42px]', className)}>{title}</h1>
                    {/* Render any children elements passed to the modal */}
                    {children}
                    {/* Button component with optional icon and text */}
                    <Button className="bg-blue-1 focus-visible:ring-0 focus-visible:ring-offset-0" onClick={handleClick}>
                        {/* Conditionally render the button icon if provided */}
                        {buttonIcon && (
                            <Image src={buttonIcon} alt="button icon" width={13} height={13} />
                        )} &nbsp;

                        {buttonText || 'Schedule Meeting'} {/* Render button text or default text */}
                    </Button>
                </div>
            </DialogContent>
        </Dialog>
    )
}

export default MeetingModal; // Exporting the component for use in other parts of the application
