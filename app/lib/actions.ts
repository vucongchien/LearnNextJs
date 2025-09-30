'use server'

import { z } from 'zod';
import postgres from 'postgres';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

const sql = postgres(process.env.DATABASE_URL!,{ssl:'require'});

const FormSchema = z.object({
  id: z.string(),
  customerId: z.string(),
  amount: z.coerce.number(),
  status: z.enum(['pending', 'paid']),
  date: z.string(),
});

const CreateInvoice = FormSchema.omit({ id: true, date: true });


export async function createInvoice(formData: FormData){

    const { customerId, amount, status } = CreateInvoice.parse({
      customerId: formData.get('customerId') as string,
      amount: formData.get('amount') as string,
      status: formData.get('status') as 'pending' | 'paid',
    });
    const amountInCents = amount * 100;
    const date = new Date().toISOString().split('T')[0];

    await sql`
        INSERT INTO invoices (customer_id, amount, status, date)
        VALUES (${customerId}, ${amountInCents}, ${status}, ${date})
    `;
    revalidatePath('/ui/invoices');
    redirect('/ui/invoices');
}

const UpdateInvoice = FormSchema.omit({ id:true,date: true });

export async function updateInvoice(id:string,formData: FormData){
  const {  customerId, amount, status } = UpdateInvoice.parse({
    customerId: formData.get('customerId') as string,
    amount: formData.get('amount') as string,
    status: formData.get('status') as 'pending' | 'paid',
  });

  const amountInCents = amount * 100;

  await sql`
    UPDATE invoices
    SET customer_id = ${customerId},
        amount = ${amountInCents},
        status = ${status}
    WHERE id = ${id}
  `;
  revalidatePath('/ui/invoices');
  redirect('/ui/invoices');
}

export async function deleteInvoice(id: string) {
  await sql`DELETE FROM invoices WHERE id = ${id}`;
  revalidatePath('/dashboard/invoices');
}