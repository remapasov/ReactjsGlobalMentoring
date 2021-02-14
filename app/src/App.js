import React from 'react';

export const FirstComponent = React.createElement(
  'div',
  {},
  'Rendered by React.createElement'
);

export class SecondComponent extends React.Component {
  render() {
    return <div>Rendered by class</div>
  }
};

export class ThirdComponent extends React.PureComponent {
  render() {
    return <div>Rendered by React.PureComponent</div>
  }
};

export function FourthComponent() {
  return (
    <div>Rendered by function</div>
  );
}
