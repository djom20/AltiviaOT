<?php
class BrochureController extends ControllerBase {
    public function getProjects() {
    	$params = array ();
    	$galerys = $this->getModel('list_galerys');
    	$details = $this->getModel('list_details');
        
        $projetcs = Partial::arrayNames(
            $this->getModel('list_projects')->select()
        );

        for($i=0; $i<count($projetcs); $i++) {
            $params[$i]['project'] = $projetcs[$i];

        	$params[$i]['galery'] = Partial::arrayNames($galerys->select(array (
                ':idproject' => $projetcs[$i]['idproject']
            )), array('idproject'));

            $params[$i]['detail'] = Partial::arrayNames($details->select(array (
                ':idproject' => $projetcs[$i]['idproject']
            )), array('idproject'));
        }

        HTTP::JSON(Partial::createResponse(HTTP::Value(200), $params));
    }
}