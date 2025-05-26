type Foo = { kind: "foo"; fooProp: number };
type Bar = { kind: "bar"; barProp: string };
type FooOrBar = Foo | Bar;

// 🌟 QUIRK: using a return type of "x is Foo" we can return a boolean whilst also decclaring the specific type as Foo
const isFoo = (x: any): x is Foo => x.kind === "foo";
const isBar = (x: any): x is Bar => x.kind === "bar";

const example: any = { kind: "foo", fooProp: 42 };

if(isFoo(example)) {
  console.log(example.fooProp);
  // console.log(example.barProp); <-- Trying to access barProps will fail as the type has been narrowed to Foo
}

if(isBar(example)) {
  // console.log(example.fooProp);  <-- Trying to access fooProps will fail as the type has been narrowed to Foo
  console.log(example.barProp);
}

// 🧠 TAKEAWAY
// - Type guards (like x is Foo) allow us to narrow down the type of a variable based on a condition explicitly.
// - This is useful when working with union types (like Foo | Bar) to ensure we only access properties that are valid for the narrowed type.