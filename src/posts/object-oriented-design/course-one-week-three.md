---
date: "03/10/2021 9:43AM"
title: "Object Oriented Design - Week Three"
category: "Design"
tags: [""]
description: "..."
---

## Design Principles

**Coupling:** Focuses on complexity between a module and other modules.
<br>

_Tightly Coupled:_ When modules are highly reliant on eachother
<br>

_Loosely Coupled:_ When modules easily connect to eachother
<br>

_Degree:_ The number of connections between the module and others. With **coupling**, you want to keepthe degree small
<br>

_Ease:_ How obvious the connections between the module and others are. With **coupling**, you want the connections to be easy to make without neding to understand the implementations of the other modules.
<br>

_Flexibility:_ How interchangeable the other modules are for this module. With **coupling**, you want the other modules easily replaceable for something better in the future.
<br>

---

**Cohesion:** Focuses on complexity within a module.
<br>

_High cohesion:_ module performs one task and nothing else or has a clear purpose
<br>

_Low cohesion:_ Encapsulates more than one purpose or has an unclear purpose
<br>

### **Separation of concerns**

**Concern:** It is anything that matters in providing a solution to a problem
<br>

**Information Hiding:** Allows modules of our system to give others the minimum amount of information needed to use them correctly and hide everything else.
<br>

**Conceptual Integrity:** The principle that anywhere you look in your system, you can tell that the design is part of the same overall design.
<br>

**Liskov Substitution Principle:** A subclass can replace a superclass, if and only if, the subclass does not change the functionality of the superclass

## Modeling Behaviour

**Sequence Diagram:** Used to show how objects in your program interact with each other to complete tasks
<br>
