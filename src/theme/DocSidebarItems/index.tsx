import React, {memo, type ReactNode, useMemo} from 'react';
import {
  DocSidebarItemsExpandedStateProvider,
  useVisibleSidebarItems,
  isActiveSidebarItem,
} from '@docusaurus/plugin-content-docs/client';
import DocSidebarItem from '@theme/DocSidebarItem';

import type {Props} from '@theme/DocSidebarItems';

function filterTopLevelItems(
  items: Props['items'],
  activePath: Props['activePath'],
  level: Props['level'],
): Props['items'] {
  if (level !== 1 || !activePath) {
    return items;
  }

  const hasActiveCategory = items.some(
    (item) => item.type === 'category' && isActiveSidebarItem(item, activePath),
  );

  if (!hasActiveCategory) {
    return items;
  }

  return items.filter(
    (item) => item.type !== 'category' || isActiveSidebarItem(item, activePath),
  );
}

function DocSidebarItems({items, ...props}: Props): ReactNode {
  const topLevelItems = useMemo(
    () => filterTopLevelItems(items, props.activePath, props.level),
    [items, props.activePath, props.level],
  );

  const visibleItems = useVisibleSidebarItems(topLevelItems, props.activePath);

  return (
    <DocSidebarItemsExpandedStateProvider>
      {visibleItems.map((item, index) => (
        <DocSidebarItem key={index} item={item} index={index} {...props} />
      ))}
    </DocSidebarItemsExpandedStateProvider>
  );
}

export default memo(DocSidebarItems);
