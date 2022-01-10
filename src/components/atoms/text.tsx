interface TextProps extends React.HTMLProps<HTMLTextAreaElement> {
  children?: {};
  className?: string;
}
const Text: React.FC<TextProps> = ({ children, className }) => {
  return <text className={className}>{children}</text>;
};
export default Text;
