import { cn } from "@/lib/utils";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

type ActiveLinkProps = {
  children: React.ReactNode;
} & LinkProps;

export const ActiveLink = ({ children, href, ...rest }: ActiveLinkProps) => {
  const { asPath } = useRouter();
  const isCurrentPath =
    asPath === href || asPath === rest.as || asPath.startsWith(String(rest.as));

  return (
    <Link
      href={href}
      className={cn(
        "text-sm font-medium transition-colors hover:text-blue-500",
        isCurrentPath ? "text-blue-500" : "text-muted-foreground"
      )}
    >
      {children}
    </Link>
  );
};
