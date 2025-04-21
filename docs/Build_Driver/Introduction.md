---
title: "Introduction to Drivers"
sidebar_position: 1
---

<div style={{ color: "#039dfc", fontWeight: "bold" }}>Training Course 01</div>

# Introduction to Drivers
## What is a Driver?
In programming, a driver is software that allows an operating system (OS) or another program to interact with hardware devices. It acts as a translator, enabling the OS to communicate with specific hardware without needing to know the exact details of how that hardware functions. Essentially, a driver provides the software interface needed to control and manage hardware components. 

## Why is this Important?
Drivers are crucial to OpenSensorHub because they act as the <em>bridge</em> between various sensors, actuators, and other "things" and the platform's core functionality. Drivers translate raw data from these devices into a <em>common</em>, interoperable format (referred to as [SWE Common](https://www.ogc.org/standards/swecommon/)). This allows OpenSensorHub to understand, process, and utilize the data from a wide range of technologies, making it a flexible and adaptable platform. 

## What to Expect?
In this training course, you’ll learn how to build a driver for a simple sensor from the ground up. You’ll start by selecting a basic sensor and configuring it to work with a Raspberry Pi. From there, you’ll dive into the fundamentals of driver programming. These foundational skills will prepare you to develop a sensor driver within an OpenSensorHub (OSH) Node.