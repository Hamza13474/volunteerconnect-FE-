import { Suspense, useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
// import { useThree, useResource } from 'react-three-fiber'
// import { Canvas, extend, useThree, useResource } from 'react-three-fiber'

import { ContactShadows, Environment, useGLTF, OrbitControls, Stage, Html } from "@react-three/drei";
import { HexColorPicker } from "react-colorful";
import { proxy, useSnapshot } from "valtio";
import { Scene } from 'three';
import { DragControls } from 'three/examples/jsm/controls/DragControls'
import { useSelector, useDispatch, Provider } from 'react-redux';
import { store } from '../../store';


// Using a Valtio state model to bridge reactivity between
// the canvas and the dom, both can write to it and/or react to it.
const state = proxy({
    current: null,
    items: {
        Std_Tongue: "#ffffff",
        Std_Upper_Teeth: "#ffffff",
        Std_Lower_Teeth: "#ffffff",
        Std_Skin_Head: "#ffffff",
        Std_Skin_Body: "#ffffff",
        Std_Skin_Arm: "#ffffff",
        Std_Skin_Leg: "#ffffff",
        Std_Nails: "#ffffff",
        Std_Eye_R: "#ffffff",
        Std_Cornea_R: "#ffffff",
        Std_Eye_L: "#ffffff",
        Std_Cornea_L: "#ffffff",
        Jeans: "#ffffff",
        Plaid_Punk_Shirt: "#ffffff",
        "Plaid_Punk_Shirt.001": "red",
        Boots: "#ffffff",
    },
})

function Shoe() {
    const shirtR = useSelector(state => state.shirtR);
    const pentR = useSelector(state => state.pentR);
    const shoeR = useSelector(state => state.shoeR)

    console.log("in shoe", shoeR)
  




    const ref = useRef()
    // const snap = useSnapshot(state)
    // Drei's useGLTF hook sets up draco automatically, that's how it differs from useLoader(GLTFLoader, url)
    // { nodes, materials } are extras that come from useLoader, these do not exist in threejs/GLTFLoader
    // nodes is a named collection of meshes, materials a named collection of materials
    // const { nodes, materials } = useGLTF("ganja.glb")
    const { scene, nodes, materials } = useGLTF("NewManModal.glb")
    const MainModal = useGLTF("ManModal.glb")
    // const shirt = useGLTF("shirt.glb");
    const pant = useGLTF("pant.glb");
    const shoes = useGLTF("shoes.glb");
    const mooch = useGLTF("mooch.glb");



    let shirt = useGLTF(shirtR.shirt || "shirt.glb");
    if (shirtR.shirt) {
        let shirtGem = shirt.nodes.shirt;
        let obj = scene.getObjectByProperty("name", "Wolf3D_Outfit_Top");
        scene.remove(obj);
        scene.add(shirtGem)
    }

    let pent = useGLTF(pentR.pant || 'pant.glb');
    if (pentR.pent){
        let pantGem = pent.nodes.pant;
        let obj = scene.getObjectByProperty('name', 'pant');
        scene.remove(obj);
        scene.add(pantGem)
    }


    let shoe = useGLTF(shoeR.shoe || 'shoes.glb');
    if(shoeR.shoe){
        let shoesGem = shoe.nodes.shoes;
        let obj = scene.getObjectByProperty("name", "shoes");
        scene.remove(obj);
        scene.add(shoesGem) 
    }



    let [arr, setArr] = useState()

    useEffect(() => {

        setArr(scene)
    }, [])



    // let shirtGem = shirt.nodes.shirt;
    let pantGem = pant.nodes.pant;
    let shoesGem = shoes.nodes.shoes;
    let moochGem = mooch.nodes.mooch;

    // Animate model
    useFrame((state) => {
        // const t = state.clock.getElapsedTime()
        ref.current.rotation.z = 0
        ref.current.rotation.x = 0
        ref.current.rotation.y = 0
        // ref.current.position.y = (1 + Math.sin(t / 1.5)) / 10
    })

    // Cursor showing current color

    const setChangeDataHandl = (data) => {
        let obj = scene.getObjectByProperty("name", "Wolf3D_Outfit_Top");
        scene.remove(obj);
        scene.add(data)
    }

    const setChangeDataHandl2 = () => {
        let obj = scene.getObjectByProperty("name", "pant");
        scene.remove(obj);
        scene.add(pantGem)
    }

    const setChangeDataHandl3 = () => {
        let obj = scene.getObjectByProperty("name", "shoes");
        scene.remove(obj);
        scene.add(shoesGem)
    }

    const setChangeDataHandl4 = () => {
        let obj = scene.getObjectByProperty("name", "mooch");
        scene.remove(obj);
        scene.add(moochGem)
    }

    const setChangeDataHandl5 = () => {
        let obj = scene.getObjectByProperty("name", "");
        scene.clear(scene.children);
    }


    return (
        <>
{/* 
            <Html>
                <div style={{ width: '400px' }}>
                    <h1>Check Our Magic</h1>
                </div>
                <div className="Controls">
                    <button onClick={setChangeDataHandl}>  Shirt </button>
                    <button onClick={setChangeDataHandl2}> pant  </button>
                    <button onClick={setChangeDataHandl3}>  shoes </button>
                    <button onClick={setChangeDataHandl4}>  mooch </button>
                    <button onClick={() => window.location.reload(false)}>  reset </button>
                </div>
            </Html> */}

            <group ref={ref} dispose={null}>
                <scene name="Scene">
                    <mesh
                        name="Object_0"
                    >
                        <primitive object={scene} />
                    </mesh>
                </scene>
            </group>
        </>
    )
}


export default function Modal() {
    return (

        <>
            <Canvas>
                <Provider store={store}>
                    <ambientLight intensity={0.7} />
                    <spotLight castShadow />
                    <Suspense >
                        <Stage environment={'city'} intensity={'0.6'}>
                            <Shoe />
                        </Stage>
                    </Suspense>
                    <OrbitControls enableZoom={true} enablePan={true} />
                </Provider>
            </Canvas>
            {/* <Picker /> */}
        </>
    )
}
    // function Picker() {
    //     const snap = useSnapshot(state)
    //     return (
    //         <div style={{ display: snap.current ? "block" : "none" }}>
    //             <HexColorPicker className="picker" color={snap.items[snap.current]} onChange={(color) => (state.items[snap.current] = color)} />
    //             <h1>{snap.current}</h1>
    //         </div>
    //     )
    // }