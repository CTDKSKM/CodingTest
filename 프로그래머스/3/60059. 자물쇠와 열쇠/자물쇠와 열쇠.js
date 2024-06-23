function solution(key, lock) {
    const N = lock.length;
    const M = key.length;
    const extendedSize = N + 2 * (M - 1);

    const keys = [key];
    for (let i = 1; i < 4; i++) {
        keys.push(rotate(keys[i - 1]));
    }

    const extendedLock = Array.from({ length: extendedSize }, () =>
        Array(extendedSize).fill(0)
    );

    for (let i = 0; i < N; i++) {
        for (let j = 0; j < N; j++) {
            extendedLock[i + M - 1][j + M - 1] = lock[i][j];
        }
    }

    for (const rotatedKey of keys) {
        for (let x = 0; x <= extendedSize - M; x++) {
            for (let y = 0; y <= extendedSize - M; y++) {
                if (canUnlock(extendedLock, rotatedKey, x, y, N, M)) {
                    return true;
                }
            }
        }
    }
    return false;
}

function rotate(matrix) {
    const N = matrix.length;
    const rotated = Array.from({ length: N }, () => Array(N).fill(0));
    for (let i = 0; i < N; i++) {
        for (let j = 0; j < N; j++) {
            rotated[j][N - 1 - i] = matrix[i][j];
        }
    }
    return rotated;
}

function canUnlock(extendedLock, key, startX, startY, lockSize, keySize) {
    const lock = JSON.parse(JSON.stringify(extendedLock));
    for (let i = 0; i < keySize; i++) {
        for (let j = 0; j < keySize; j++) {
            lock[startX + i][startY + j] += key[i][j];
        }
    }
    for (let i = 0; i < lockSize; i++) {
        for (let j = 0; j < lockSize; j++) {
            if (lock[i + keySize - 1][j + keySize - 1] !== 1) {
                return false;
            }
        }
    }
    return true;
}
