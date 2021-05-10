---
date: "03/10/2021 9:43AM"
title: "Object Oriented Design - Week Two"
category: "Design"
tags: [""]
description: "..."
---

The goal of Object-Oriented Design is to:

- Make an abstract data type easier to write
- Structure a system around abstract data types called classes
- Introduce the ability for an abstract data type to extend another. _Inheritance_

## Four Design Principles

- **Abstraction**: Simplifying a concept in the problem domain to its essentials within some _context_. It allows you to better understand a concept by breaking it down into a simplified description that ignores unimportant details.

  - _Rule of least astonishment_: The abstraction captures the essential **attributes** and **behaviors** for a concept with no surprises and no definitions that fall beyond its scope.
  - Think about the essential **attributes** of an object within a context. What about that object will be consistant across all instances even if the value of that attribute differs per instance when given a context. You do not need to list attributes that are not relevent to the current context
  - Think about the essential **behaviors** of an object within a context. What are the consistent functions of that object across all instances of that object. You do not need to list behaviors that are not relevent to the current context.

- **Encapsulation**: Involves 3 ideas.
  1. You _bundle_ attribute values / data & behaviors / functions that manipulate those values together into a self-contained object.
  2. You can _expose_ certain data and functions of that object, which can be accessed from other objects.
  3. You can _restrict_ access to certain data and functions to only within that object.
- **Decomposition**: Taking a **whole** thing and dividing it up into different **parts**. Or the opposite, Taking a bunch of seperate **parts** with different functionalities and combing them to form a **whole**
  - Fixed or Dynamic
  - Lifetime
  - Sharing
- **Generalization**: Take shared or repeated functions and/or attributes and abstract them to a more general class. Then have the parts that fall under the umbrella of that general class **inherit** from it. **Subclasses** inherit from a **superclass**
  <br>
  Dog <---Animal---> Cat

  <br>

**Getter Methods:** Methods that retrieve data, and their names typically begin with _get_ and end with the _name_ of the attribute whose value you will be returning. Getters often retrieve a private piece of data

**Setter Methods:** Methods that change data, and their names typically begin with _set_ and end with the _name_ of the variable you wish to set. Setters are used to set a private attribute in a safe way

<br>

**Decomposition relationships**:

- _Association:_ "Some" relationship. This means that there is a loose relationship between two objects. These objects may interact with each other for "some" time. Person <-> Sport || Food <-> Wine || Cat <-> Yarn
- _Aggregation:_ "Has-a" relationship where a whole has parts that belong to it. There may be sharing of parts among the wholes in this relationship. This relationship is considered **weak**, meaning parts can belong to the wholes but they can also exist independently. Pet <-> Pet Store || Crew <-> Airplane || Chef <-> Kitchen
- _Composition_: An exclusive containment of parts, also known as a strong has-a relationship. The whole cannot exist without its parts. If a part is lost the whole no longer exists. If the whole is destroyed the parts no longer exist. Usually the parts can only be accessed through the whole. Person <-> Brain || House <-> Room ||

---

**Polymorphism:** When two classes have the same description of a behavior but the implimentation may be different. A dog barks and a cat meows, both speak but each impliments it differently.
