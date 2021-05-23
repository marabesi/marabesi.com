---
layout: post
title: Kubernetes quick notes deployment (WIP)
date: 2021-05-01 01:06:05.000000000 -03:00
image: 
type: article
published: true
status: published
categories:
- devops
tags:
- kubernetes,
- Kubernetes,
- k8s,
- deployment,
- docker,
- exposing,
- kubectl,
- container,
- example,
- pod,
- Pod,
- expose,
- ReplicaSet,
- image,
- abstraction
---

As opposed to docker that operates on the container level directly, kubernetes
has a different approach as such there are a set of steps required to get
the application running into the cluster.  For example, in docker a simple
`docker run` creates the container and starts it. In kubernetes, first we need
to create a deployment and
then expose it.

## Creating a pods

A pod is the smallest unit on the kubernetes cluster. Pods are a group of
containers that are related to each other.

### Manually

It's not possible to run an empty pod, it is required to have an image.

```sh
kubectl run my-pod-name --image=my-image
```

Side note: for deleting the created pod, k8s expects the prefix `pods/` (issuing
the delete command without the prefix spaw the error message:
`error: the server doesn't have a resource type "my-pod-name"`), in this
case the full name to delete the pod would be: `pods/my-pod-name`.

Fetching the information abouut the created pods, can be achieved in two ways,
with less details:

sh```
kubectl get pods
```

Another options to list more details would be:

sh```
kubectl describe pods my-pod-name
```

Side node: the name of the pod is options, in this case `my-pod-name` could be
removed.

Another helpful command to check the container running is to access it via
browser or any other client, for that the `port-forward` is used:

```sh
kubectl port-forward my-pod-name container-port:local-port
```

## Deployments

### Creating a deployment

```sh
kubectl create deployment my-deployment-name --image=my-image
```

### Exposing the deployment

```sh
kubectl expose deployment my-deployment-name
```
## Managing containers

Therefore, it is possible to use kubernetes with the same docker behavior,
for example the `kubectl run` command is available for that. The attention point
is the need to have a pod. In other words, in docker you can run a container
with `docker run`, but in kubeternets you need a pod before that. The analogy
that {% cite kubernetes_for_beginners --file 2021-05-01-kubernetes-quick-notes-deployment %}
uses for describing how kubernetes handles the different layersof abstraction
is as follows:

- A **Deployment** manages a **ReplicaSet** 
- A **ReplicaSet** manages a **Pod**
- A **Pod** is an abstraction of a **Container**

## References

{% bibliography --cited_in_order --file 2021-05-01-kubernetes-quick-notes-deployment %}