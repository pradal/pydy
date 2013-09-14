describe("Canvas should initially have ", function() {
    
  
    it("Reset Camera button ", function() {
        expect($("#resetControls")).toBeDefined(); });    
        
    it("Start Animation button ", function() {
        expect($("#startAnimation")).toBeDefined(); });    

    it("Pause Animation button", function() {
        expect($("#pauseAnimation")).toBeDefined(); });    
        
    it("Stop Animation button", function() {
        expect($("#stopAnimation")).toBeDefined(); });                        

    it("Switch Camera button", function() {
        expect($("#switchCamera")).toBeDefined(); });                                
        
    it("\"Go To Frame\" Div ", function() {
        expect($("#gotoFrame")).toBeDefined(); });

    it("Frame Count Div ", function() {
        expect($("#frameCount")).toBeDefined(); });    
    
    it("Current Frame Div ", function() {
        expect($("#currentFrame")).toBeDefined(); });        
});


describe("After initialization of class, with a test JSON Object, \
                      Canvas should have ", function() {
    
    var canvas;
    
    beforeEach(function() {
        canvas = new Canvas(JSONObj);
    });
    
    it("Time steps equal to ten ", function() {
        expect(canvas.timeSteps).toEqual(10); });                                

    it("canvas.frames to be a Object3D ", function() {
        expect(canvas.frames instanceof 
                           THREE.Object3D).toBeTruthy(); });                                
        
    it("...And canvas.frames to be named \"frames\" ", function() {
        expect(canvas.frames.name).toEqual("frames"); });                                    
    
    it("canvas.grid to be a Object3D ", function() {
        expect(canvas.grid instanceof 
                           THREE.Object3D).toBeTruthy(); });                                
        
    it("...And canvas.grid to be named \"Grid\" ", function() {
        expect(canvas.grid.name).toEqual("Grid"); });    
    
    it("canvas.cameras to be a Object3D ", function() {
        expect(canvas.cameras instanceof 
                           THREE.Object3D).toBeTruthy(); });                                
        
    it("...And canvas.cameras to be named \"cameras\" ", function() {
        expect(canvas.cameras.name).toEqual("Cameras"); });    
    
    it("canvas.cameraPoints to be a Object3D ", function() {
        expect(canvas.cameraPoints instanceof 
                           THREE.Object3D).toBeTruthy(); });                                
        
    it("...And canvas.cameraPoints to be named \"Camera Points\" ", function() {
        expect(canvas.cameraPoints.name).toEqual("Camera Points"); });        
    
    it("canvas.lights to be a Object3D ", function() {
        expect(canvas.lights instanceof 
                           THREE.Object3D).toBeTruthy(); });                                
        
    it("...And canvas.lights to be named \"Lights\" ", function() {
        expect(canvas.lights.name).toEqual("Lights"); });    
    
    it("canvas.lightPoints to be a Object3D ", function() {
        expect(canvas.lightPoints instanceof 
                           THREE.Object3D).toBeTruthy(); });                                
        
    it("...And canvas.lightPoints to be named \"Light Points\" ", function() {
        expect(canvas.lightPoints.name).toEqual("Light Points"); });            
    
    it("canvas.scene to be an instance of THREE.Scene ", function() {
        expect(canvas.scene instanceof THREE.Scene).toBeTruthy(); });           
        
});    


describe("After call to canvas.initialize function \
                      Canvas should have ", function() {
    
    var canvas;
    
    beforeEach(function() {
        canvas = new Canvas(JSONObj);
        canvas.initialize();
    });

    it("a THREE.WebGLRenderer defined  ", function() {
        expect(canvas.renderer instanceof 
                        THREE.WebGLRenderer).toBeTruthy(); });
                        
    it("...With height and width equal to as specified in JSON Object", function() {
        
        expect(canvas.renderer.domElement.height).toEqual(JSONObj.height);
        expect(canvas.renderer.domElement.width).toEqual(JSONObj.width);
         });  
        
    it("canvas.container to be a canvas div", function() {
        expect(canvas.container).toEqual($("#container")); });                        
    
    it("canvas.axes to be an instance of THREE.Axishelper", function() {
        expect(canvas.axes instanceof THREE.AxisHelper).toBeTruthy(); });                        
    
    it("   ...With dimensions as defined in JSON Object", function() {
        expect(canvas.axes.geometry.boundingSphere.radius).toEqual(JSONObj.height); });                            
    
    it("canvas.primaryCamera defined", function() {
        expect(canvas.primaryCamera).toBeDefined(); });                                
    
    it("...And should be an instance of THREE.Camera", function() {
        expect(canvas.primaryCamera instanceof THREE.Camera).toBeTruthy(); });                                    
                               
    it("canvas.primaryControls defined", function() {
        expect(canvas.primaryControls).toBeDefined(); });                                
    
    it("...And should be an instance of THREE.TrackballControls", function() {
        expect(canvas.primaryControls instanceof THREE.TrackballControls).toBeTruthy(); });                                        
     
        
});

