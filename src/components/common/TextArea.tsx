interface TextAreaProps {
  placeholder?: string;
}

export default function TextArea({ placeholder }: TextAreaProps) {
  return <textarea className='text-area' placeholder={placeholder} />;
}