interface FormActionProps {
  handleSubmit: any;
  type?: string;
  action?: 'submit' | 'reset' | 'button' | undefined;
  text: string;
}

const fixedButtonClass = "group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 mt-10";

export default function FormAction({
  handleSubmit,
  type = "Button",
  action = "submit",
  text,
}: FormActionProps) {
  return (
    <>
      {type === "Button" ? (
        <button
          type={action}
          className={fixedButtonClass}
          onSubmit={handleSubmit}
        >
          {text}
        </button>
      ) : (
        <></>
      )}
    </>
  );
}
