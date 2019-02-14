import * as React from 'react';

import ListGroupItem from './ListGroupItem';

import { BsPrefixComponent, SelectCallback } from './helpers';

interface ListGroupProps {
  variant?: 'flush';
  activeKey?: unknown;
  defaultActiveKey?: unknown;
  onSelect?: SelectCallback;
}

declare class ListGroup<
  As extends React.ReactType = 'div'
> extends BsPrefixComponent<As, ListGroupProps> {
  static Item: typeof ListGroupItem;
}

export default ListGroup;