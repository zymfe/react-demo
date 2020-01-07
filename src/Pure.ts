import React, { ReactElement } from 'react'

interface Props {
  [key: string]: any
}

const hasOwnProperty = Object.prototype.hasOwnProperty

function is(x: any, y: any): boolean {
  if (x === y) {
    return x !== 0 || y !== 0 || 1 / x === 1 / y;
  } else {
    return x !== x && y !== y;
  }
}

function shallowEqual(objA: any, objB: any): boolean {
  // 首先对基本类型进行比较
  if (is(objA, objB)) {
    return true;
  }

  if (typeof objA !== 'object' || objA === null ||
      typeof objB !== 'object' || objB === null) {
    return false;
  }

  const keysA = Object.keys(objA);
  const keysB = Object.keys(objB);

  // 长度不相等直接返回false
  if (keysA.length !== keysB.length) {
    return false;
  }

  // key相等的情况下，再去循环比较
  for (let i = 0; i < keysA.length; i++) {
    if (
      !hasOwnProperty.call(objB, keysA[i]) ||
      !is(objA[keysA[i]], objB[keysA[i]])
    ) {
      return false;
    }
  }

  return true;
}

const shouldComponentUpdate = (arePropsEqual: Function) => (BaseComponent: ReactElement) => {
  class ShouldComponentUpdate extends React.Component {
    shouldComponentUpdate(nextProps: Props) {
      return arePropsEqual(this.props, nextProps)
    }

    render() {
      return <BaseComponent {...this.props}></BaseComponent>
    }
  }

  // ShouldComponentUpdate.displayName = `Pure(${BaseComponent.displayName})`;
  return ShouldComponentUpdate;
}

function Pure (BaseComponent: ReactElement) {
  const hoc = shouldComponentUpdate(function (props: Props, nextProps: Props) {
    return !shallowEqual(props, nextProps)
  })
  return hoc(BaseComponent)
}