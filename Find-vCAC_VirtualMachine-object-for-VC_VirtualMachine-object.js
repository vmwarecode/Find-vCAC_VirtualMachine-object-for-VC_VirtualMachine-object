// Copyright 2017, VMware, Inc. All Rights Reserved
//
// VMware vRealize Orchestrator action sample
// 
// Finds a vCAC:VirtualMachine object corresponding to a VC:VirtualMachine object.
//
//
//Action Inputs:
// vm  -  VC:VirtualMachine
//
//Return type: vCAC:VirtualMachine

var vCACVMs = Server.findAllForType("vCAC:VirtualMachine", "VMUniqueID eq '" + vm.config.instanceUuid + "'");
var vCACVM = null;
if (vCACVMs != null && vCACVMs.length ==1) {
	vCACVM = vCACVMs[0];
} else {
	if (vCACVMs == null || vCACVMs.length ==0) {
		//could not find
		throw("Could not find vCAC VM matching VMUniqueID of "+vm.config.instanceUuid);
	} else {
		//found more than one!  Should never happen
		throw("Found more than one vCAC VM matching VMUniqueID of "+vm.config.instanceUuid);
	}
}

return vCACVM;