interface MenuCustomEvent<T = any> extends CustomEvent {
    detail: T;
    target: HTMLIonMenuElement;
  }