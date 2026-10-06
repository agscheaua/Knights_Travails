Knights Travails

This project maked me more confortable with tinking in terms of processes,
needed to be implemented, then in thers of general code and what every this
code is trying to achive, it helped me pratice more abstract thinking, BFS,
how to find the shortest path in a unweightes, cycling graph, and overall
it made me go resarch about things i did not understand or know, or about
what other people have experinced with this type of exercice/project, and what helped them in understanding the requirements to solve it.

childAndParentVisitedNodesMap, is a map, created with the help of the map
constructor from javascript engine, it holds a key and value pair, the key
are the discovered nodes, and the values are the parents that discovered them.

nodesToBeEval, is an array, that is utilized as a queue, that stores the
nodes that needs to be expanded/read/get its childre/.

we use a loop to iterate over all the parent nodes, and expand them, and
store their children nodes, the children and parent are stored in the map as key=child and value=parent, if we already discovered the node from other parents we skip it, and check the other one, we stop the iteration we found the end coordination.

after we found the end we then reconstruct the path checking the pairs and
getting their coresponding child-parent values in order, the end will always be a child of some node (childEND - parentOfEND - childOfparent OfEND - parentOfchildOfparentOfEND - etc), till we arrive at the start.
