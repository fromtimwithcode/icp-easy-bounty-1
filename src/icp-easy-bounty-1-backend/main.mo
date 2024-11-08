import Array "mo:base/Array";

actor class HelloWorld() {
  stable var names : [Text] = [];

  public func greet(name : Text) : async Text {
    names := Array.append(names, [name]);
    return "Hello, " # name # "!";
  };

  public query func getSubmittedNames() : async [Text] {
    names;
  };
};