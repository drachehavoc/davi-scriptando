type TConstructor = { new(...args: any[]): {} }
type TGenericConstructor<T extends Object = {}> = { new(...args: any[]): T }
type Entity = TGenericConstructor<EntityHandler>

class EntityHandler {
    #target: {}

    constructor(TargetClass: TConstructor, args: any[]) {
        this.#target = new TargetClass(...args)
        return new Proxy(this, this)
    }

    get(target: this, p: string | symbol, receiver: any) {
        return Reflect.get(this.#target, p, receiver) ?? Reflect.get(this, p, receiver)
    }

    yyy() { 
        console.log("yyy")
    }
}

function EntityMixer<T extends TConstructor>(BaseClass: T) {
    return function (...args: ConstructorParameters<T>) {
        return new EntityHandler(BaseClass, args)
    } as unknown as T & Entity
}

class MinhaClasse {
    constructor(a: string, b: number) { }

    zzz() { 
        console.log("zzz")
    }
}

const MinhaClasseMisturada = EntityMixer(MinhaClasse)

const obj = new MinhaClasseMisturada("asd", 12)

obj.zzz()
obj.yyy()