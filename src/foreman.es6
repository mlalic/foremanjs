/**
 * The module exports the `Foreman` object which contains all components
 * exposed by the framework.
 *
 * They are exposed as both properties on the default export, as well as
 * individually re-exported as module elements.
 */
import 'core-js/shim';
import Brick_ from './brick';

export default {
  Brick: Brick_
}

export const Brick = Brick_;
