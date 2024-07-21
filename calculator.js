function ac()
{
    input.value=" ";
}

function del()
{
    input.value = input.value.toString().slice(0,-1);
}

function append(val)
{
    input.value +=val;
}

function res()
{
    input.value = eval(input.value);
}