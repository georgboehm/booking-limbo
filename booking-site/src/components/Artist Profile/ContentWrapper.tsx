type Props = {
  children: React.ReactNode;
};

const ContentWrapper: React.FC<Props> = ({ children }) => {
  return <div className="w-full min-h-[300px] p-4">{children}</div>;
};

export default ContentWrapper;
