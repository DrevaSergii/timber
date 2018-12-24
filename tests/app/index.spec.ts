import Timber from '../../build';
import { describe, test } from 'mocha';
import { expect } from 'chai';

describe('App', () => {
    const timber = new Timber({
        sort: {
            'properties-order': [
                'position',
                'top',
                'left'
            ],
            'unspecified-properties-position': 'bottom',
        }
    });

    test('', () => {
        timber.clean({
            from: './tests/app/styles/input.css',
            to: './tests/app/styles/output.css',
        })
            .then(() => console.log('Clean success'))
            .catch((error: any) => console.error(error));
    });
});
