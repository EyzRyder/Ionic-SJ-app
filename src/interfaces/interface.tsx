import * as z from 'zod';

export interface ILink {
  "title": string,
  "url": string,
  "favicon": string,
  "description": string,
  "img": string
  "whoRegistered"?: string,
  "domainAge": string,
  "serverLocal": string,
  "detectionsCounts": string,
  "registerData"?: string[]
}

export const UrlFormSchema = z.object({
  url: z.string().min(1, { message: 'mais de 1 digito' }),
});

export type UrlForm = z.infer<typeof UrlFormSchema>;