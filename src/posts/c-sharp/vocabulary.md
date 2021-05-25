---
date: "03/10/2021 9:43AM"
title: "C# Vocabulary"
category: "C#"
tags: ["C#"]
description: "C# Vocabulary reference"
---

_.NET Framework:_ Software framework that provides a standard way of building and deploying applications. It also provides software developers with a wide array of libraries and tools

<br>

_Garbage Collection:_ As your program runs, objects that are created, used, and then passed out of scope are marked and removed by a garbage collection process, freeing up memory and resources

<br>

Encapsulation: ...

<br>

_Backing Variable:_ Stores a value

```C#
string _twitterAddress; // Backing Variable
string TwitterAddress
{
    get { return _twitterAddress }
    set
    {
        if (value.StartsWith("@"))
        {
            _twitterAddress = value;
        } else
        {
            throw new Exception("The twitter address must begin with @")
        }
    }
}

```

<br>

_Access Modifier:_ Designed to limit visibility. 4 access modifiers available in C#:

- Public
- Private
- Protected
- Internal (Default)

<br>

_abstract class:_

<br>

_enum:_
