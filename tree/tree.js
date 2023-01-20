

class Node {

    children = null;


    constructor(name,children) {
        this.name = name;
        this.children = children;

    }

    select(path) {

        const queue= [this];
        let [first,...rest]=path;
        let node;
        queue.push(this)
        if (this.name === first && rest.length === 0) {
            return [this];

        } else if (this.name===first) {
            while (queue.length) {
                //  for (let child of this.children){
                //let nameN = path.length - 1
                 node= queue.shift()
                if(node===null) continue;
                if (node.name === first) {
                   path.push(node)
                    return path;

                }
            }
        }

        for (let child of this.children) {
            const pathPattern = child.select(rest);
            if (pathPattern) return path
        }
        return null;

    }




} export {Node}


