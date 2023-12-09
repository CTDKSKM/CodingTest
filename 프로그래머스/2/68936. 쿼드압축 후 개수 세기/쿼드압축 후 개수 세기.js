var cnt_0 = 0, cnt_1 = 0;
function solution(arr) {
    checkArea(arr, 0, arr.length, 0, arr.length);
    return [cnt_0, cnt_1];
}
function checkArea(arr, row_min, row_max, col_min, col_max) {
    var cnt = 0;
    for(var row = row_min; row < row_max; row++) {
        for(var col = col_min; col < col_max; col++) {
            if(arr[row][col]) cnt++;
        }
    }
    if(cnt == 0) {
        cnt_0 += 1;
    } else if((row_max - row_min) * (col_max - col_min) == cnt) {
        cnt_1 += 1;
    } else {
        var new_row = (row_min + row_max) / 2;
        var new_col = (col_min + col_max) / 2;
        checkArea(arr, row_min, new_row, col_min, new_col);
        checkArea(arr, row_min, new_row, new_col, col_max);
        checkArea(arr, new_row, row_max, col_min, new_col);
        checkArea(arr, new_row, row_max, new_col, col_max);
    }
}