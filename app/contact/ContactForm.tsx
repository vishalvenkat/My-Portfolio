'use client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useActionState, useEffect } from 'react';
import { toast } from 'sonner';

const LabelWithRequiredStar = ({
  label,
  htmlFor,
}: {
  label: string;
  htmlFor: string;
}) => {
  return (
    <Label htmlFor={htmlFor}>
      <span className="flex gap-1">
        <span>{label}</span>
        <span className="text-red-500">*</span>
      </span>
    </Label>
  );
};
const sendMessageServerAction = async (
  formData: FormData
) => {
  console.log(formData);
  // const fullname = formData.get('fullname') as string;
  // const email = formData.get('email') as string;
  // const message = formData.get('message') as string;

  const errors: any = {};

  // if (!fullname) errors.fullnameError = 'Name is required';
  // if (!email) errors.emailError = 'Email is required';
  // if (!message) errors.messageError = 'Message is required';

  if (Object.keys(errors).length > 0) {
    return { ...errors, success: false };
  }

  // simulate success
  return { success: true };
};

const resetForm = () => {
  console.log('reset');
}

const ContactForm = () => {
  const [state, action, isPending] = useActionState(
    sendMessageServerAction,
    { success: false }
  );

  useEffect(() => {
    if (state?.success) {
      toast.success('Message sent successfully!');
    }
  }, [state]);

  return (
    <form action={action} className="space-y-6">
      <div className="space-y-4">
        <LabelWithRequiredStar label="Name" htmlFor="fullname" />
        <div className="space-y-1">
          <Input
            type="text"
            id="fullname"
            name="fullname"
            placeholder="Your name, your fame"
            className="px-2 py-6"
          />
          {state?.fullnameError && (
            <span className="text-sm text-red-500">
              {state.fullnameError}
            </span>
          )}
        </div>
      </div>

      <div className="space-y-4">
        <LabelWithRequiredStar label="Email" htmlFor="email" />
        <div className="flex flex-col space-y-1">
          <Input
            type="text"
            id="email"
            name="email"
            placeholder="Where can I reach you back?"
            className="px-2 py-6"
          />
          <span className="text-sm text-muted-foreground">
            Temporary emails are also accepted, unless you wish to hear back 😉
          </span>
          {state?.emailError && (
            <span className="text-sm text-red-500">
              {state.emailError}
            </span>
          )}
        </div>
      </div>

      <div className="space-y-4">
        <LabelWithRequiredStar label="Message" htmlFor="message" />
        <div className="space-y-1">
          <Textarea
            id="message"
            name="message"
            placeholder="Your words, my inbox."
            className="px-2 py-4"
          />
          {state?.messageError && (
            <span className="text-sm text-red-500">
              {state.messageError}
            </span>
          )}
        </div>
      </div>

      <div className="space-y-4">
        <Button
          type="submit"
          className="w-full px-8 py-6"
          size="lg"
          disabled={isPending}
        >
          {isPending
            ? 'Transporting your message to my inbox... 📨'
            : 'Submit'}
        </Button>

        <Button
          type="reset"
          className="w-full px-8 py-6 cursor-pointer"
          size="lg"
          variant="outline"
          onClick={() =>
            resetForm
          }
        >
          Reset
        </Button>
      </div>
    </form>
  );
};
export default ContactForm;
