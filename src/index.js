/* eslint-disable import/extensions */
/* eslint-disable no-restricted-syntax */
/* eslint-disable import/prefer-default-export */
/* eslint-disable no-console */
/* eslint-disable no-restricted-syntax */

import {windowTree, eventTarget} from './tree/objectTrees.js'
import {renderTree} from './tree/renderTree.js'

renderTree(windowTree);
renderTree(eventTarget)