import Objects from 'wasabi-common/lib/types/Objects';

export enum State {
  hovered = 'isHovered',
  focused = 'isFocused',
  active = 'isActive',
  loading = 'isLoading',
  static = 'isStatic'
}

export const StateValues = Objects.values(State);
