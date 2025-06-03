type AvatarContentProps = {
  children: React.ReactNode;
};

export const AvatarContent = ({ children }: AvatarContentProps) => (
  <div className="flex flex-col">{children}</div>
);
