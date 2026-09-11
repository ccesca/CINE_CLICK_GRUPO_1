# 🎬 CineClick

### Tu entrada al cine, a un click de distancia.

**CineClick** es un proyecto académico desarrollado para la materia **Desarrollo Web** de la **Universidad Católica de Córdoba (UCC)**.

El objetivo es construir una página web sencilla, atractiva y fácil de utilizar para simular la compra de entradas de cine, aplicando de forma práctica los conocimientos adquiridos durante la materia.

---

## 📖 Descripción

CineClick busca representar el funcionamiento básico de una plataforma de venta de entradas para cine.

En su primera etapa, el proyecto está enfocado principalmente en el **frontend**.

La aplicación permitirá presentar películas y brindar al usuario una interfaz desde la cual pueda iniciar el proceso de compra de una entrada.

---

## 🎯 Objetivo

El objetivo principal de CineClick es aplicar los conceptos de **desarrollo web** aprendidos durante el cursado mediante la construcción progresiva de una aplicación funcional.

El proyecto no pretende resolver una problemática específica, sino desarrollar una plataforma que cumpla correctamente con su propósito: ofrecer una experiencia sencilla e intuitiva para la selección y compra de entradas de cine.

---

## 👥 Público objetivo

CineClick es un **proyecto académico**, por lo que su principal objetivo es demostrar los conocimientos adquiridos durante la materia Desarrollo Web.

Está pensado principalmente para su presentación y evaluación dentro de la **Universidad Católica de Córdoba**, aunque funcionalmente representa una plataforma destinada a cualquier persona interesada en consultar películas y comprar entradas de cine.


---

# 📂 Repositorio

El código fuente del proyecto se encuentra alojado en GitHub:

**Repositorio:**
https://github.com/ccesca/Tickets_Cine_Grupo1.git

---

# 🚀 Guía para nuevos miembros del equipo

## 1. Clonar el repositorio

Primero debemos abrir una terminal en la carpeta donde queramos guardar el proyecto.

Luego ejecutamos:

```bash
git clone https://github.com/ccesca/Tickets_Cine_Grupo1.git
```

Entramos a la carpeta del proyecto:

```bash
cd Tickets_Cine_Grupo1
```

---

## 2. Actualizar el proyecto
Antes de comenzar a trabajar siempre debemos asegurarnos de tener la versión más reciente del repositorio.

```bash
git checkout master
git pull origin master
```

De esta forma evitamos comenzar una tarea utilizando una versión desactualizada.

---

# 🔄 Flujo de trabajo con Git

Supongamos que debemos desarrollar la cartelera de películas.

| Paso | Acción                    | Comando                                                                        |
| ---- | ------------------------- | ------------------------------------------------------------------------------ |
| 1    | Actualizar `master`       | `git checkout master` → `git pull origin master`                               |
| 2    | Crear una rama de trabajo | `git branch nombre`                                               |
| 3    | Guardar y subir cambios   | `git add .` → `git commit -m "Descripción"` → `git push origin nombre` |
| 4    | Crear Pull Request        | `nombre` → `master`                                                    |

> Todo Pull Request deberá ser revisado por otro integrante antes de realizar el merge.
---

# 🔍 Pull Requests y revisión

Los Pull Requests permiten revisar el trabajo antes de incorporarlo a una rama principal.

## Regla principal

> 🚨 **Nadie puede aprobar su propio Pull Request.**

Siempre deberá existir al menos una segunda persona que revise los cambios.
Para organizar las revisiones utilizaremos inicialmente la siguiente rotación:

| Autor del cambio | Revisor principal |
| ---------------- | ----------------- |
| 👑 Francesca     | 🫡 Augusto        |
| 🫡 Augusto       | 🎤 Dante          |
| 🎤 Dante         | 👑 Francesca      |
---
# 🔐 Reglas importantes

Para mantener organizado el repositorio:

* ❌ No desarrollar directamente sobre `Produccion`.
* ❌ No desarrollar directamente sobre `Testing`.
* ❌ No aprobar nuestro propio Pull Request.
* ✅ Crear una rama para cada funcionalidad o corrección.
* ✅ Actualizar `master` antes de comenzar una nueva tarea.
* ✅ Revisar los cambios de nuestros compañeros.
* ✅ Probar el proyecto antes de llevarlo a `Produccion`.
* ✅ Utilizar Pull Requests para integrar cambios importantes.

---
