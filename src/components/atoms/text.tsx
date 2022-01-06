interface TextProps {
  placeholder?: string;
  className?: string;
}
const Text: React.FC<TextProps> = ({ placeholder, className }) => {
  return <text className={className}>{placeholder}</text>;
};
export default Text;
