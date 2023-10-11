import clsx from 'clsx';
import slugify from 'slugify';

import HashIcon from './images/hash.inline.svg';

const extractText = (children) => {
  if (typeof children === 'string') {
    return children;
  }

  if (Array.isArray(children)) {
    const text = children.reduce((acc, child) => {
      if (typeof child === 'string') {
        return acc + child;
      }
      return acc + extractText(child.props.children);
    }, '');
    return text;
  }

  return '';
};

const AnchorHeading =
  (Tag) =>
  // eslint-disable-next-line react/prop-types
  ({ children }) => {
    const id = slugify(extractText(children), { lower: true, remove: /[*+~.()'"!?:@]/g }).replace(
      /_/g,
      ''
    );

    return (
      <Tag id={id} className="not-prose group relative w-fit scroll-mt-20 lg:scroll-mt-5">
        <a
          className="anchor absolute -right-16 top-1/2 flex h-full -translate-x-full -translate-y-[calc(50%-0.15rem)] items-center justify-center px-2.5 no-underline opacity-0 transition-opacity duration-200 hover:opacity-100 group-hover:opacity-100 sm:hidden"
          href={`#${id}`}
          tabIndex="-1"
          aria-hidden
        >
          <HashIcon
            className={clsx(Tag === 'h2' && 'w-3.5', Tag === 'h3' && 'w-3', 'text-green-45')}
          />
        </a>
        {children}
      </Tag>
    );
  };

export default AnchorHeading;
