
export function calculator(x,y, operation){

    switch (operation) {
        case "add":
            return x+y;
    case "sub":
        return x-y;
        case "mul":
            return x*y;
            case "div":
                return x/y; 
        default:
            break;
    } 
}

