import { FC, memo } from 'react';
import { LinkButton } from 'shared/LinkButton';

const LinkButtonMemo = memo(LinkButton);

interface HeaderItemProps {
  path: string
  title: string
}

export const HeaderLinkItem: FC<HeaderItemProps> = memo(({ path, title }) => {
  return (
    <>
      <LinkButtonMemo
          to={path}
        >
          {title}
      </LinkButtonMemo>
    </>
  );
});
