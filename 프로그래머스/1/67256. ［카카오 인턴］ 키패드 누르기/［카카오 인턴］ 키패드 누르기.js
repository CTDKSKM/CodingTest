function solution(numbers, hand) {
    const locator = {left:'*', right:'#'}

    return numbers.map((num)=>{
        if (num == 1 || num == 4 || num == 7) {
            locator.left = num;
            return "L"
        }
        else if (num == 3 || num == 6 || num == 9) {
            locator.right = num;
            return "R"
        }
        else {
            const leftDist = getLeft(locator.left, num)
            const rightDist = getRight(locator.right, num)
            if (leftDist < rightDist) {
                locator.left = num
                return "L"
            }
            else if (leftDist > rightDist) {
                locator.right = num
                return "R"
            }
            else {
                if (hand == 'left') {
                    locator.left = num
                    return "L"
                }
                else {
                    locator.right = num
                    return "R"
                }
            }
        }
    }).join('');
}

function getLeft(locate, target) {
    switch(locate) {
        case '*':
            switch(target) {
                case 2:
                    return 4
                case 5:
                    return 3
                case 8:
                    return 2
                case 0:
                    return 1
            }
        case 1:
            switch(target) {
                case 2:
                    return 1
                case 5:
                    return 2
                case 8:
                    return 3
                case 0:
                    return 4
            }
        case 2:
            switch(target) {
                case 2:
                    return 0
                case 5:
                    return 1
                case 8:
                    return 2
                case 0:
                    return 3
            }
        case 4:
            switch(target) {
                case 2:
                    return 2
                case 5:
                    return 1
                case 8:
                    return 2
                case 0:
                    return 3
            }
        case 5:
            switch(target) {
                case 2:
                    return 1
                case 5:
                    return 0
                case 8:
                    return 1
                case 0:
                    return 2
            }
        case 7:
            switch(target) {
                case 2:
                    return 3
                case 5:
                    return 2
                case 8:
                    return 1
                case 0:
                    return 2
            }
        case 8:
            switch(target) {
                case 2:
                    return 2
                case 5:
                    return 1
                case 8:
                    return 0
                case 0:
                    return 1
            }
        case 0:
            switch(target) {
                case 2:
                    return 3
                case 5:
                    return 2
                case 8:
                    return 1
                case 0:
                    return 0
            }
    }
}
function getRight(locate, target) {
    switch(locate) {
        case '#':
            switch(target) {
                case 2:
                    return 4
                case 5:
                    return 3
                case 8:
                    return 2
                case 0:
                    return 1
            }
        case 0:
            switch(target) {
                case 2:
                    return 3
                case 5:
                    return 2
                case 8:
                    return 1
                case 0:
                    return 0
            }
        case 2:
            switch(target) {
                case 2:
                    return 0
                case 5:
                    return 1
                case 8:
                    return 2
                case 0:
                    return 3
            }
        case 3:
            switch(target) {
                case 2:
                    return 1
                case 5:
                    return 2
                case 8:
                    return 3
                case 0:
                    return 4
            }
        case 5:
            switch(target) {
                case 2:
                    return 1
                case 5:
                    return 0
                case 8:
                    return 1
                case 0:
                    return 2
            }
        case 6:
            switch(target) {
                case 2:
                    return 2
                case 5:
                    return 1
                case 8:
                    return 2
                case 0:
                    return 3
            }
        case 8:
            switch(target) {
                case 2:
                    return 2
                case 5:
                    return 1
                case 8:
                    return 0
                case 0:
                    return 1
            }
        case 9:
            switch(target) {
                case 2:
                    return 3
                case 5:
                    return 2
                case 8:
                    return 1
                case 0:
                    return 2
            }
    }
}