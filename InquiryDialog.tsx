
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

const formSchema = z.object({
    quantity: z.string().min(1, "Quantity is required"),
    unit: z.string().min(1, "Unit is required"),
    targetPrice: z.string().optional(),
    paymentTerms: z.string().min(1, "Payment terms are required"),
    deliveryTerms: z.string().min(1, "Delivery terms are required"),
    requiredBy: z.string().min(1, "Required by date is required"),
    message: z.string().optional(),
});

interface InquiryDialogProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    productName: string;
    supplierName: string;
}

export function InquiryDialog({
    open,
    onOpenChange,
    productName,
    supplierName,
}: InquiryDialogProps) {
    const { toast } = useToast();
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            quantity: "",
            unit: "MT",
            targetPrice: "",
            paymentTerms: "",
            deliveryTerms: "",
            requiredBy: "",
            message: "",
        },
    });

    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values);
        toast({
            title: "Inquiry Sent",
            description: `Your inquiry for ${productName} has been sent to ${supplierName}.`,
        });
        onOpenChange(false);
        form.reset();
    }

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                    <DialogTitle>Send Inquiry</DialogTitle>
                    <DialogDescription>
                        Request a quote for <span className="font-semibold text-foreground">{productName}</span> from <span className="font-semibold text-foreground">{supplierName}</span>
                    </DialogDescription>
                </DialogHeader>

                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                        <div className="grid grid-cols-2 gap-4">
                            <FormField
                                control={form.control}
                                name="quantity"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Quantity</FormLabel>
                                        <FormControl>
                                            <Input type="number" placeholder="Enter quantity" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="unit"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Unit</FormLabel>
                                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                                            <FormControl>
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Select unit" />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                <SelectItem value="MT">Metric Ton (MT)</SelectItem>
                                                <SelectItem value="KG">Kilogram (bKG)</SelectItem>
                                                <SelectItem value="L">Liter (L)</SelectItem>
                                                <SelectItem value="DRUM">Drum</SelectItem>
                                            </SelectContent>
                                        </Select>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>

                        <FormField
                            control={form.control}
                            name="targetPrice"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Target Price / Unit (Optional)</FormLabel>
                                    <FormControl>
                                        <Input type="number" placeholder="Enter target price" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <div className="grid grid-cols-2 gap-4">
                            <FormField
                                control={form.control}
                                name="paymentTerms"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Payment Terms</FormLabel>
                                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                                            <FormControl>
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Select terms" />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                <SelectItem value="advance">100% Advance</SelectItem>
                                                <SelectItem value="lc">Letter of Credit (LC)</SelectItem>
                                                <SelectItem value="net15">Net 15 Days</SelectItem>
                                                <SelectItem value="net30">Net 30 Days</SelectItem>
                                                <SelectItem value="cod">Cash on Delivery</SelectItem>
                                            </SelectContent>
                                        </Select>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="deliveryTerms"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Delivery Terms</FormLabel>
                                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                                            <FormControl>
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Select terms" />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                <SelectItem value="exw">Ex-Works</SelectItem>
                                                <SelectItem value="fob">FOB</SelectItem>
                                                <SelectItem value="cif">CIF</SelectItem>
                                                <SelectItem value="door">Door Delivery</SelectItem>
                                            </SelectContent>
                                        </Select>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>

                        <FormField
                            control={form.control}
                            name="requiredBy"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Required By</FormLabel>
                                    <FormControl>
                                        <Input type="date" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="message"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Additional Message</FormLabel>
                                    <FormControl>
                                        <Textarea
                                            placeholder="Any specific requirements regarding packing, quality certification, etc."
                                            className="resize-none"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <div className="flex justify-end gap-4">
                            <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>
                                Cancel
                            </Button>
                            <Button type="submit">Send Inquiry</Button>
                        </div>
                    </form>
                </Form>
            </DialogContent>
        </Dialog>
    );
}
