interface TextProps extends React.HTMLProps<HTMLTextAreaElement> {
  children?: {};
  className?: string;
}
const Text: React.FC<TextProps> = ({ children, className, ...props }) => {
  return (
    <text className={className} {...props}>
      {children}
    </text>
  );
};
export default Text;
