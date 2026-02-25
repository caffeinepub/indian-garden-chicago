import Map "mo:core/Map";
import Text "mo:core/Text";

actor {
  type MenuItem = {
    name : Text;
    description : Text;
    price : Float;
    category : Text;
  };

  type RestaurantInfo = {
    address : Text;
    phone : Text;
    hours : Text;
  };

  let menuItems = Map.empty<Text, MenuItem>();
  var restaurantInfo : ?RestaurantInfo = null;
  var specialties : [Text] = [];

  public shared ({ caller }) func addMenuItem(name : Text, description : Text, price : Float, category : Text) : async () {
    let item : MenuItem = {
      name;
      description;
      price;
      category;
    };
    menuItems.add(name, item);
  };

  public shared ({ caller }) func setRestaurantInfo(address : Text, phone : Text, hours : Text) : async () {
    restaurantInfo := ?{
      address;
      phone;
      hours;
    };
  };

  public shared ({ caller }) func setSpecialties(specialtyList : [Text]) : async () {
    specialties := specialtyList;
  };

  public query ({ caller }) func getMenuItems() : async [MenuItem] {
    menuItems.values().toArray();
  };

  public query ({ caller }) func getRestaurantInfo() : async ?RestaurantInfo {
    restaurantInfo;
  };

  public query ({ caller }) func getSpecialties() : async [Text] {
    specialties;
  };
};
